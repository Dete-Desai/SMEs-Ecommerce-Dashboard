import { Box } from "@chakra-ui/react";

function CardBody(props) {
  const { variant, children, ...rest } = props;
  
  const styles = {
    variant, // Assuming you have variant styles defined in the theme
  };

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CardBody;

