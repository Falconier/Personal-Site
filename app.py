from flask import Flask, flash, redirect, render_template, request, url_for

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
app.secret_key = "your-secret-key"
EMAIL_ADDRESS = f"{os.getenv('EMAIL_ADDRESS')}"
EMAIL_PASSWORD = f"{os.getenv('EMAIL_PASSWORD')}"
TO_EMAIL = "jbullin.engstudio@icloud.com"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/sandbox')
def sandbox():
    return render_template('sandbox.html')

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        # Get form data
        first_name = request.form.get("first-name")
        last_name = request.form.get("last-name")
        email = request.form.get("email")
        phone = request.form.get("phone", "Not provided")
        reason = request.form.get("reason")

        # Validate required fields
        if not all([first_name, last_name, email, reason]):
            flash("Please fill out all required fields.", "error")
            return redirect(url_for("contact"))

        # Compose email
        subject = f"Contact Form Submission: {reason}"
        body = f"""
        New Contact Form Submission

        First Name: {first_name}
        Last Name: {last_name}
        Email: {email}
        Phone: {phone}
        Reason for Contact: {reason}
        """

        msg = MIMEMultipart()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = TO_EMAIL
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        # Send email
        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.sendmail(EMAIL_ADDRESS, TO_EMAIL, msg.as_string())
            flash("Your message has been sent successfully!", "success")
        except Exception as e:
            flash(f"Failed to send message. Error: {str(e)}", "error")

        return redirect(url_for("contact"))

    return render_template("contact.html")

if __name__ == '__main__':
    app.run(debug=True)