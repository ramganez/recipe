import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from app.db import get_db

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/ping', methods=('GET', 'POST'))
def ping():
    return "pong"
