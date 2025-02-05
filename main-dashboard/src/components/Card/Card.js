import { Box } from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;
  
  const styles = {
    variant, // Assuming the variant is a style you want to apply
  };

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;


