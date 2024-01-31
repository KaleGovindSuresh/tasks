import React, { useState } from "react";
import { Box, Input, Button, Text, Stack, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
        toast({
          title: "Successfully Register..",
          status: "success",
          isClosable: true,
          position: "bottom",
          duration: 5000,
        });
      })
      .catch((err) => {
        toast({
          title: "Opps! Something went Wrong...",
          status: "error",
          isClosable: true,
          position: "bottom",
          duration: 5000,
        });
        console.log(err);
      });
  };

  return (
    <Flex py={5} px={4} justify="center" bg="teal.600">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" p="6" m="4">
        <Text fontWeight="bold" color="white" fontSize="2xl">
          Employee Signup
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb="4"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="4"
            required
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="4"
            required
          />
          <Button type="submit" colorScheme="blue" style={{width:"100%"}}>
            Signup
          </Button>
        </form>
        <Stack>
          <Text fontSize="md">Already Sign Up</Text>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignUp;
