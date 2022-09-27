from app.database import db


class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    cook_time = db.Column(db.String(100), nullable=False)
    nutrition = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Recipe -- {self.id} -- {self.desc}"

    @classmethod
    def select_all(cls):
        """ Select all recipes and serialize it.
        """
        all_recipes = cls.query.all()
        return [
            {
                "id": each.id,
                "Desc": each.desc,
                "Type": each.type,
                "Time": each.cook_time,
                "Nutrition": each.nutrition,
            }
            for each in all_recipes
        ]
