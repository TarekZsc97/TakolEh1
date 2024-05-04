from flask import Flask, render_template, request
import sqlite3

################### Create Flask APP  #########################

app = Flask(__name__)


# Create Home route
@app.route("/")
def home():
    return render_template("index.html")


# Create Ready route
@app.route("/ready")
def ready():
    return render_template("ready.html")


# Create Enter Data  route
@app.route("/enter-data")
def join_team():
    return render_template("enter_data.html")


# Create get recipe route
@app.route("/get-recipe")
def get_recipe():
    db = sqlite3.connect("database/takol_eh.db")
    cr = db.cursor()
    main_ingredient = request.args["search")
    query = f"""SELECT  name, img , time FROM recipes WHERE main_ingredient LIKE ("%{main_ingredient}%")"""
    cr.execute(query)
    result = cr.fetchall()
    db.close()
    return render_template("suggestions.html", data=result)


################### Run Flask APP  #########################

if __name__ == "__main__":
    app.run(debug=True)
