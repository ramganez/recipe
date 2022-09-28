from cgitb import reset
import re
from app.database import db


class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    cook_time = db.Column(db.String(100), nullable=False)
    nutrition = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Recipe -- {self.id} -- {self.desc}"

    @staticmethod
    def serialize(recipes):
        """Helper method to serialize all the recipe objects"""
        return [
            {
                "id": recipe.id,
                "Desc": recipe.desc,
                "Type": recipe.type,
                "Time": recipe.cook_time,
                "Nutrition": recipe.nutrition,
            }
            for recipe in recipes
        ]

    @classmethod
    def select_all(cls):
        """Select all recipes and serialize it."""
        all_recipes = cls.query.all()
        return Recipe.serialize(all_recipes)

    @classmethod
    def search_all(cls, query):
        # import ipdb; ipdb.set_trace()
        results = []
        results.extend(cls.query.filter(Recipe.desc.like(f"%{query}%")).all())
        results.extend(cls.query.filter(Recipe.type.like(f"%{query}%")).all())
        results.extend(cls.query.filter(Recipe.cook_time.like(f"%{query}%")).all())
        results.extend(cls.query.filter(Recipe.nutrition.like(f"%{query}%")).all())
        return Recipe.serialize(set(results))
