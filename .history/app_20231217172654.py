from flask import Flask, render_template

################### Database Setup #########################


################### Create Flask APP  #########################

app = Flask(__name__)

# Create Home route
@app.route("/")
def home():
    return render_template("home.html")


# Create captain route
@app.route("/captain")
def captain():
    return render_template("captain.html")


# Create join team route
@app.route("/join")
def join_team():
    return render_template("join_team.html")

################### Run Flask APP  #########################

if __name__ == "__main__":
    app.run(debug=True )
