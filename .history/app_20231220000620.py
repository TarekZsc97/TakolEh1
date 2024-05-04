from flask import Flask, render_template

################### Database Setup #########################


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


# Create Enter Data team route
@app.route("/enter-data")
def join_team():
    return render_template("enter_data.html")
# Create Enter Data team route
@app.route("/enter-data")
def join_team():
    return render_template("enter_data.html")


################### Run Flask APP  #########################

if __name__ == "__main__":
    app.run(debug=True )
