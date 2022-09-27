from cmath import rect
import functools

from flask import Blueprint, jsonify, request

from app.models import Recipe
from app.database import db
from symbol import return_stmt

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/ping", methods=("GET", "POST"))
def ping():
    return "pong"


@api_bp.route("/recipe/get", methods=("GET",))
def get_recipes():
    """
    Get All Receipes
    """
    return jsonify(Recipe.select_all())


@api_bp.route("/recipe/add", methods=["POST"])
def add_recipes():
    """
    Add Receipe
    """
    if request.method == "POST":
        recipe = Recipe(
            desc=request.json["desc"],
            type=request.json["type"],
            cook_time=request.json["cook_time"],
            nutrition=request.json["nutrition"],
        )
        db.session.add(recipe)
        db.session.commit()
    return {}


"""
    res_ = jsonify(
        [
            {
                "Desc": "Frozen yoghurt",
                "Type": "Lunch",
                "Time": "1 Hr",
                "Nutrition": "protein 10.2g",
            },
            {
                "Desc": "Ice cream sandwich",
                "Type": "Breakfast",
                "Time": "50 Min",
                "Nutrition": "protein 10.2g",
            },
            {
                "Desc": "Eclair",
                "Type": "Dinner",
                "Time": "10 Min",
                "Nutrition": "carbohydrates 3.9g",
            },
            {
                "Desc": "Cupcake",
                "Type": "Drinks",
                "Time": "30 Min",
                "Nutrition": "cholesterol 30.2mg",
            },
            {
                "Desc": "Gingerbread",
                "Type": "Salad",
                "Time": "15 Min",
                "Nutrition": "131 calories",
            },
        ]
    )
    return res

"""