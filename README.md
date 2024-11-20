# Discount PRO: A Coupon Collecting Application

**Purpose**  
Discount PRO is a user-friendly application designed to simplify coupon collection for Bangladeshi e-commerce enthusiasts. With a seamless interface, users can browse, save, and utilize discount coupons for their favorite online stores, ultimately helping them save money.

## **Live URL**

## [Live Application URL](https://arshakib.netlify.app/)

## **Key Features**

### 1. **User Authentication**

- Login and Registration via email and password.
- Social login using Google (Firebase Authentication).

### 2. **Responsive Design**

- Fully responsive across mobile, tablet, and desktop devices.

### 3. **Home Page**

- Interactive banner slider showcasing app-related visuals.
- **Top Brands:** A marquee slider displaying popular brand logos.
- **Brands on Sale:** Highlighted section for brands currently running sales, displayed in cards with key details.
- Extra dynamic/static sections based on developer creativity.

### 4. **Brands Page**

- Searchable list of all brands with detailed cards showing:
  - Brand logo, name, and rating.
  - “View Coupons” button.
  - Dynamic “Sale is On” indicator for relevant brands.

### 5. **Private Routes**

- Access restricted to logged-in users:
  - **Brand Details:** Displays coupons, allows copying codes, and redirects to shop links.
  - **My Profile:** Personalized user details with an option to update profile information.

### 6. **Coupon Management**

- Generate and display JSON data for brands and coupons.
- Use `react-copy-to-clipboard` for copying coupon codes with toast notifications.

### 7. **Error Handling**

- Custom 404 error page with a “Back to Home” button.

### 8. **Additional Features**

- Password validation: Includes criteria like uppercase, lowercase, and minimum length.
- Password toggle functionality for login/registration forms.
- Forgot password feature integrated with Firebase.
- AOS or Animate.css package for animations.

---

## **Environment Setup**

- **Firebase Authentication**: Secured configuration using `.env` files.
- Firebase project domain setup for Netlify or Surge hosting.

### **Environment Variables**

```env
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_PROJECT_ID=your_firebase_project_id
REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_firebase_sender_id
REACT_APP_APP_ID=your_firebase_app_id


NPM Packages Used
React Router DOM: For routing and private routes.
Firebase: For authentication.
Tailwind CSS: For responsive and attractive design.
react-copy-to-clipboard: To enable coupon code copying functionality.
React Fast Marquee: For displaying brand logos in a smooth slider.
AOS/Animate.css: For interactive animations.


How to Use the Application

Signup/Login:
Use email/password or Google account to register or log in.
Browse Coupons:
Navigate through brands and discover exciting offers.
Copy Coupon Codes:
Use the “Copy Code” button to copy and redeem coupons instantly.
Explore User Profile:
Update your profile photo and name through the “My Profile” section.

```
