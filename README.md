# **Order Management API**

## 📖 **Description**

This is a **RESTful API** built with **Node.js and Express.js** for managing orders in an **e-commerce system**. It follows the **MVC architecture** and includes order processing with basic inventory management.

---

## 🚀 **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**

- Node.js installed on your system.
- A code editor like VS Code.
- Postman or any API testing tool.

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Shaveen1998/E-commerce-Order-Management-API.git

# Navigate into the project directory
cd order-management-api

# Install dependencies
npm install

# Start the server
node server.js


## 📌 **Design Decisions**
---

### 1. **MVC Architecture**
- **Model:** Handles data storage (in-memory storage for this example).
- **Service:** Contains business logic.
- **Controller:** Processes requests and responses.
- **Routes:** Define API endpoints.

---

### 2. **Order Queue Implementation**
- Orders are processed in the order they are received (**FIFO** - First In, First Out).
- The `/api/orders/process-next-order` endpoint updates the status of the next order in the queue.

---

### 3. **Inventory Management**
- A predefined list of products is cached in memory.
- Before confirming an order, the product stock is validated to ensure availability.



**🔍 Assumptions**
------------------

*   **No Database:** Orders and inventory are stored in-memory (ideal for demo purposes).

*   **Simple Order Processing:** Orders are processed one at a time in FIFO (First In, First Out) order.

*   **Basic Validation:** API validates customer information and product availability but does not handle complex business rules like order modification.
```

## **🔍 API Endpoints**

#### Create a new order - POST/api/orders

#### Get all orders - GET/api/orders

#### Get a specific order by ID - GET/api/orders/:id

#### Cancel an order - DELETE/api/orders/:id

#### Process the next order in the queue - POST/api/orders/process-next-order

---
