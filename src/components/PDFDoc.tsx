import React from "react";
import { Document, Page, Font, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { PDFDocProps } from "../interfaces";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto",
  },
  section: {
    margin: 30,
    lineHeight: 2,
  },
  image: {
    width: "auto",
    height: "auto",
  },
});

const PDFDoc: React.FC<PDFDocProps> = ({ name, performance, feedback, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>ФИ: {name}</Text>
          <Text>Спектакль: {performance}</Text>
          <Text>Отзыв: {feedback}</Text>
          {picture && <Image src={picture} style={styles.image} />}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDoc;
