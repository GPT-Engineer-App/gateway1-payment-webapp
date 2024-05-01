import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, useToast, Link, Image } from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    amount: "",
    mobilenumber: "",
    address: "",
    remarks: "",
  });
  const [loading, setLoading] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://54.169.246.202/gateway/gateway1", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      const data = await response.json();
      if (data.request.status === "success") {
        setTransactionDetails(data);
        toast({
          title: "Payment Initiated",
          description: "Your payment has been initiated successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        throw new Error(data.request.error_message || "Failed to initiate payment");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Juan Dela Cruz" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@yahoo.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input name="message" value={formData.message} onChange={handleChange} placeholder="Your message" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="5000" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mobile Number</FormLabel>
          <Input name="mobilenumber" value={formData.mobilenumber} onChange={handleChange} placeholder="9909232321" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={formData.address} onChange={handleChange} placeholder="Your address" />
        </FormControl>
        <FormControl>
          <FormLabel>Remarks</FormLabel>
          <Input name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Any remarks" />
        </FormControl>
        <Button leftIcon={<FaCreditCard />} colorScheme="blue" isLoading={loading} type="submit">
          Pay Now
        </Button>
      </VStack>
      {transactionDetails && (
        <Box mt={10}>
          <Text fontWeight="bold">Transaction Details:</Text>
          <Text>Transaction ID: {transactionDetails.trans_id}</Text>
          <Text>External ID: {transactionDetails.external_id}</Text>
          <Text>Status: {transactionDetails.operation.status}</Text>
          <Link href={transactionDetails.redirect_url} isExternal>
            Complete Payment
          </Link>
          {transactionDetails.qr_content && <Image src={transactionDetails.qr_content} alt="QR Code" />}
        </Box>
      )}
    </Container>
  );
};

export default Index;
