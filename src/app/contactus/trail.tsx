<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} // Faster transition for animation
  className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center p-10 rounded-3xl shadow-lg mb-12 mx-auto"
  style={{ maxWidth: '800px' }}
>
  {/* Stronger Gradient Overlay to Make Transition More Noticeable */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-purple-900 z-0"
    style={{
      background: 'linear-gradient(to right, rgba(0, 0, 255, 0.9), rgba(255, 255, 255, 0.2), rgba(128, 0, 128, 0.9))',
      transition: 'background 0.3s ease-in-out', // Faster and more noticeable transition
    }}
  ></div>

  {/* Content - Text to stay visible over the background */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg font-secondary">
      Get in touch with us to transform your business with cutting-edge technology and solutions.
    </p>
  </div>
</motion.div>
