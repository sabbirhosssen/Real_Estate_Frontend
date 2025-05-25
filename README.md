
# 🏠 Notation Real Estate App

Welcome to the Notation Real Estate App — a full-featured web application built to manage and showcase real estate listings.

---

## 🚀 Features

- Service product and manage contact inquiries
- RESTful API built with Spring Boot
- Frontend integration ready (e.g., React)
- MySQL database support
- CORS-enabled for frontend-backend communication

---

## 🛠️ Technologies Used

- **Backend**: Spring Boot (Java)
- **Frontend**: (You can mention your framework, e.g., React, HTML/CSS, tailwindcss, redux,react router6 etc.)
- **Database**: MySQL
- **Tooling**: Maven, Git, GitHub

---

## 📂 Project Structure
* Frontend Folder Structure
```bash
Real_State/                     
├── public/                     
│   ├── index.html              
│   ├── favicon.ico             
│   └── logo192.png             
│
├── src/                        # Main source code
│   ├── assets/                 
│   │   ├── logo.png
│   │   └── background.jpg
│
│   ├── components/            
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PropertyCard.jsx
│   │   └── ContactForm.jsx
│
│   ├── pages/                 
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Properties.jsx
│
│   ├── routes/                 
│   │   └── AppRoutes.jsx
│
│   ├── services/              
│   │   └── contactService.js
│
│   ├── utils/                 
│   │   └── validators.js
│
│   ├── App.js                  
│   ├── App.css                 
│   ├── index.js                
│   └── index.css                
│
├── .env                           
├── .gitignore                    
├── package.json                 
└── README.md                   
```

* Backend Folder Structure
```bash
backend/realStateApp/
        ├── src/
        │ ├── main/
        │ │ ├── java/
        │ │ │ └── com/sabbirhosssen/realStateApp/
        │ │ │ ├── controller/
        │ │ │ ├── model/
        │ │ │ ├── repository/
        │ │ │ └── services/
        │ │ └── resources/
        │ │ ├── application.properties
        │ │ └── static/
        ├── pom.xml
        └── README.md

```
---
---

## 🧰 Installation Guide (Local Setup)

### 1. **Clone the Repository**
```bash
git clone https://github.com/sabbirhosssen/Real_State_Project_Development_3.git
cd Real_State_Project_Development_3
```
### Frontend (React)
* Go to the Frontend path:
```bash
cd Real_State
npm install
```
* Run the Frontend project
```bash
npm run dev
```

#### Backend (Java Spring Boot)
*Go to the Backend path:
```bash
cd .\backend\realStateApp
```
* First you setup Intellij idea, open to project this command
```bash
idea64.exe
```

### 2. **Set Up MySQL Database**

* Create a new MySQL database, e.g., `realestate_db`
* Update `application.properties` with your DB username & password:

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/realestate_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
```

### 3. **Build the Project**

Make sure you have **Java 17+** and **Maven** installed.

```bash
mvn clean install
```

### 4. **Run the Application**
* Run the Intellij idea
or
```bash
mvn spring-boot:run
```

---

## 🌐 API Endpoints
*Contact api
| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/c`        | Welcome test route |
| POST   | `/api/contact`  | Add a new contact  |
| GET    | `/api/contacts` | Get all contacts   |

*Subscribe Api
| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | `/api/s`           | Welcome test route      |
| POST   | `/api/subscribe`   | Add a new image generate|
| GET    | `/api/subscribes`  | Get a image generate    |

*Product Api
| Method | Endpoint                    | Description        |
| ------ | --------------------------- | ------------------ |
| GET    | `/api/`                     | Welcome test route |
| GET    | `/api/products`             | Get all products   |
| GET    | `/api/product/{id}`         | Get a One product  |
| GET    | `/product/{productId}/image`| Get a image product|
| POST   | `/api/product`              | Add a new product  |
| PUT    | `/api/product`              | Update a  product  |
| DELETE | `/api/product/{id}`         | Delete a  product  |

*Generate AI Api
| Method | Endpoint                         | Description             |
| ------ | -------------------------------- | ----------------------- |
| GET    | `/ai/`                           | Welcome test route      |
| POST   | `/ai/uploadimage`                | Add a new image generate|
| GET    | `/ai/getloadimage/{generate_id}` | Get a image generate    |
---

## 📸 Screenshots (optional)

> Add some screenshots of your frontend (if available), or Swagger API testing.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Developed by [Sabbir Hossain](https://github.com/sabbirhosssen)

```

---

### Want this saved as a file?
I can generate and send the full `README.md` file if you'd like to download it directly. Just say the word!
```


