<template>
    <footer class="bg-green-800 text-white py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About Us -->
        <div>
          <h4 class="text-xl font-bold mb-4">About Us</h4>
          <p class="text-gray-300 text-sm mb-6">
            We are a tech company specializing in digital transformation. Our
            mission is to empower businesses through innovative technology
            solutions.
          </p>
          <a href="#" class="text-green-400 hover:text-green-200 text-sm">
            Learn More
          </a>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-bold mb-4">Quick Links</h4>
          <ul class="text-gray-300 text-sm space-y-2">
            <li>
              <a href="#" class="hover:text-green-200">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">About Us</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">Services</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">Contact</a>
            </li>
          </ul>
        </div>
  
        <!-- Services -->
        <div>
          <h4 class="text-xl font-bold mb-4">Our Services</h4>
          <ul class="text-gray-300 text-sm space-y-2">
            <li>
              <a href="#" class="hover:text-green-200">Web Development</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">Mobile Apps</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">Cloud Solutions</a>
            </li>
            <li>
              <a href="#" class="hover:text-green-200">Data Analytics</a>
            </li>
          </ul>
        </div>
  
        <!-- Contact Us -->
        <div>
          <h4 class="text-xl font-bold mb-4">Contact Us</h4>
          <ul class="text-gray-300 text-sm space-y-2">
            <li class="flex items-center">
              <i class="pi pi-envelope mr-2"></i>info@yourcompany.com
            </li>
            <li class="flex items-center">
              <i class="pi pi-phone mr-2"></i>+123 456 7890
            </li>
            <li class="flex items-center">
              <i class="pi pi-map-marker mr-2"></i>123 Street, City, Country
            </li>
          </ul>
        </div>
      </div>
  
      <div class="mt-8 border-t border-green-600 pt-6 text-center text-sm">
        <div class="container mx-auto">
          <p class="mb-4">© 2024 Your Company. All rights reserved.</p>
          <div class="flex justify-center space-x-4">
            <a href="#" class="text-white hover:text-gray-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <i class="pi pi-instagram text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <i class="pi pi-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  footer {
    background-color: #064e3b; /* Tailwind's green-800 */
  }
  </style>
  