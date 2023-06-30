import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <div>
      <div className="container">
        <h1 className="info-header">Services</h1>
        <div className="information">
          At [Your Veterinary Clinic Name], we offer a wide range of services to
          meet the diverse needs of your pets. Our dedicated team of
          veterinarians and staff are committed to providing the highest quality
          care and ensuring the well-being of your furry companions. In addition
          to our comprehensive veterinary services, we also offer professional
          grooming services to help your pets look and feel their best.
          <h2>Grooming Services:</h2>
          <ol>
            <li>
              Bathing and Brushing: Treat your pet to a refreshing bath using
              high-quality, pet-friendly shampoos and conditioners. Our grooming
              experts will carefully brush their coat to remove tangles and
              mats, leaving them with a clean and shiny coat.
            </li>
            <li>
              Haircut and Styling: Our professional groomers are skilled in
              breed-specific haircuts and styling techniques. Whether your pet
              needs a trim, a full haircut, or a creative style, we can help
              create the look you desire while ensuring their comfort and
              safety.
            </li>
            <li>
              Nail Trimming: Proper nail care is essential for your pet's health
              and comfort. Our groomers will gently trim your pet's nails,
              preventing them from becoming too long and causing discomfort or
              potential injuries.
            </li>
            <li>
              Ear Cleaning: Regular ear cleaning is crucial to prevent ear
              infections and maintain good ear health. Our groomers will
              carefully clean your pet's ears, removing wax and debris to keep
              them clean and free of irritation.
            </li>
            <li>
              Teeth Brushing: Dental hygiene is essential for your pet's overall
              health. Our grooming services include teeth brushing to help
              prevent tartar buildup and maintain your pet's oral hygiene.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Services;
