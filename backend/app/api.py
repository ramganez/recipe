import functools

from flask import Blueprint, jsonify

from app.db import get_db

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/ping", methods=("GET", "POST"))
def ping():
    return "pong"


@api_bp.route("/recipe/get", methods=("GET",))
def get_recipes():
    """
    Get All Receipes
    """
    res = jsonify(
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
    # res.headers.add("Access-Control-Allow-Origin", "*")
    return res
