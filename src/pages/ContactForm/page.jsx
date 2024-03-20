import { useState } from 'react';
import { Box, Label, Input, Textarea, Button, Flex } from 'theme-ui';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box
      as={motion.form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Flex sx={{ justifyContent: 'center', mb: 4 }}>
        <img src="/contact-image.svg" alt="Contact" />
      </Flex>

      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        mb={3}
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        mb={3}
      />

      <Label htmlFor="message">Message:</Label>
      <Textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        rows={6}
        mb={4}
      />

      <Flex sx={{ justifyContent: 'center' }}>
        <Button
          type="submit"
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{ width: '200px', backgroundColor: 'primary', color: 'white' }}
        >
          Send Message
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactForm;
