import json
from flask import Blueprint, jsonify, request

from app.models import Recipe
from app.database import db

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
    return jsonify(Recipe.select_all())


@api_bp.route("/recipe/search", methods=["POST"])
def search_recipes():
    """
    Search Receipe
    """
    return jsonify(Recipe.search_all(request.json["query"]))
