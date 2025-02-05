import { Box } from "@chakra-ui/react";

function CardHeader(props) {
  const { variant, children, ...rest } = props;

  // Assuming you have variant styles defined in your theme for CardHeader
  const styles = { variant }; // You could use sx prop to style here

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CardHeader;


