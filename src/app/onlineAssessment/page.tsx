import React from "react";

const AssessmentPage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
     

      {/* Hero Section */}
      {/* <section style={styles.heroSection}> */}
        {/* <div style={styles.textContent}> */}
          {/* <h1 style={styles.heading}>Online Assessment</h1> */}
          {/* <p style={styles.paragraph}>Take your assessments online with ease and accuracy.</p> */}
          {/* <button style={styles.button}>Read More</button> */}
        {/* </div> */}
        {/* <div style={styles.imageContent}> */}
          {/* <img src="https://d3l4smlx4vuygm.cloudfront.net/Screenshot%202024-09-15%20210518.png" alt="Online Assessment" style={styles.image} /> */}
        {/* </div> */}
      {/* </section> */}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
  },
  logo: {
    width: "100px",
  },
  navLinks: {
    display: "flex",
    listStyleType: "none",
    paddingLeft: 0,
  },
  navLink: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#4a4a4a",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 0",
  },
  textContent: {
    maxWidth: "600px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6a1b9a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  imageContent: {
    flexBasis: "50%",
  },
  image: {
    width: "100%",
  },
};

export default AssessmentPage;



// import React from "react";

// const AssessmentPage = () => {
//   return (
//     <div style={styles.container}>
//       {/* Hero Section */}
//       <section style={styles.heroSection}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Online Assessment</h1>
//           <p style={styles.paragraph}>Take your assessments online with ease and accuracy.</p>
//           <button style={styles.button}>Read More</button>
//         </div>
//         <div style={styles.imageContent}>
//           <img
//             src="" // Add your image source here
//             alt="Online Assessment"
//             style={styles.image}
//           />
//         </div>
//       </section>

//       {/* MNC Logos Section */}
//       <section style={styles.logoSection}>
//         <div style={styles.logoSlider}>
//           <img
//             src="https://your-image-url-1" // Replace with your actual logo URLs
//             alt="Amazon"
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-2"
//             alt=""
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-3"
//             alt="Company 3"
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-4"
//             alt="Company 4"
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-5"
//             alt="Company 5"
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-6"
//             alt="Company 6"
//             style={styles.companyLogo}
//           />
//           <img
//             src="https://your-image-url-7"
//             alt="Company 7"
//             style={styles.companyLogo}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//   },
//   heroSection: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "50px 0",
//   },
//   textContent: {
//     maxWidth: "600px",
//   },
//   heading: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   paragraph: {
//     fontSize: "18px",
//     lineHeight: "1.5",
//     color: "#666",
//     marginBottom: "30px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#6a1b9a",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   imageContent: {
//     flexBasis: "50%",
//   },
//   image: {
//     width: "100%",
//   },

//   /* Logo Section */
//   logoSection: {
//     marginTop: "50px",
//     overflow: "hidden", // Ensures the logos that move out of view are hidden
//   },
//   logoSlider: {
//     display: "flex",
//     animation: "slide 20s linear infinite", // Sliding effect with infinite loop
//   },
//   companyLogo: {
//     width: "150px", // Adjust the size of logos
//     marginRight: "20px",
//   },

//   /* Keyframes for sliding animation */
//   "@keyframes slide": {
//     "0%": { transform: "translateX(100%)" }, // Start outside the right boundary
//     "100%": { transform: "translateX(-100%)" }, // End outside the left boundary
//   },
// };

// export default AssessmentPage;
