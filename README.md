Tinderate
This project is a Tinder clone developed using React Native for the frontend and FastAPI for the backend. The app includes authentication, match screen, and profile screen functionalities.

Features
User Authentication: Users can sign up, log in, and reset their passwords.
Profile Management: Users can view and edit their profiles.
Match Screen: Users can view and interact with potential matches.
Tech Stack
Frontend: React Native with Expo
Backend: FastAPI
Installation
Prerequisites
Node.js and npm installed
Python 3.8 or higher installed
Expo CLI installed globally (npm install -g expo-cli)
Frontend Setup
Clone the repository:
sh

git clone <your-repo-url>
cd tinder-clone/frontend
Install dependencies:
sh

npm install
Start the Expo server:
sh

expo start
Backend Setup
Navigate to the backend directory:
sh

cd tinder-clone/backend
Create and activate a virtual environment:
sh

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies:
sh

pip install -r requirements.txt
Run the FastAPI server:
sh

uvicorn main:app --reload
Environment Variables
Create a .env file in the backend directory and add the following environment variables:

env

SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
SMTP_SERVER=smtp.your_email_provider.com
SMTP_PORT=587
SMTP_USERNAME=your_email@example.com
SMTP_PASSWORD=your_email_password
Running the App
Make sure both the frontend and backend servers are running.
Open the Expo app on your mobile device or an emulator.
Scan the QR code from the Expo server to open the app.
Usage
Sign Up: Register a new account.
Log In: Log in to the app using your credentials.
Profile: View and edit your profile information.
Match: Swipe through potential matches.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License.
