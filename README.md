# E-Commerce Management System Guide
Welcome to the E-Commerce Management System! This guide will provide you with an overview of the system's features and functionalities, empowering you to effectively manage your online store.

## Overview
The E-Commerce Management System is a comprehensive solution designed to simplify the management of your online store. From inventory management to order processing, our system offers powerful tools to streamline your e-commerce operations.

## Tasks
▪ Added a new component called ViewCart which displays a list of items in the shopping cart and
  allows users to remove items from the cart. It should have a Checkout button that will the cart
  once checkout button is triggered and return to product pages.
▪ Each item in the cart is displayed as a list item that apply Bootstrap's. Each item includes the
  product name, price, and a "Remove" button.
▪ The removeFromCart function is passed down as a prop to ViewCart, which allows users to
  remove items from the cart by clicking the "Remove" button.
▪ Bootstrap classes (btn, btn-primary, btn-danger, card, etc.) are used for styling the components to
  ensure a visually appealing and responsive design.
▪ The Product component now includes a button styled with Bootstrap's btn and btn -primary
  classes for adding products to the cart.
▪ You should apply routes and navigation in this activity. You should have a home page that
  displays the company logo (choose your desired logo) and button Proceed to Shopping. Once the
  Proceed to Shopping is clicked it will show a list of products where the user can add item to cart.
  When the user clicks My Cart, it will display the ViewCart component that shows cart item.
