import os

from flask import Flask

from app import api
from app.database import db


def create_app(test_config=None):
    # create and configure the app
    # import ipdb; ipdb.set_trace()
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "recipe.sqlite"),
    )
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + app.config.get("DATABASE")

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)
    with app.app_context():
        db.create_all()

    app.register_blueprint(api.api_bp)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
