import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Calculator from "../components";
import { Text, Grid, GridItem, Center, Flex, Square } from "@chakra-ui/react";
import { Box } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Center className={styles.title}>
        <Text>CALCULATOR</Text>
      </Center>

      <Calculator />
    </div>
  );
}
