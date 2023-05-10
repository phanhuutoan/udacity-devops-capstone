import { defineStyle } from "@chakra-ui/react";

export const styles = defineStyle({
  mainBox: {
    w: "44rem" ,
    minH: '5rem' ,
    bgColor: 'white' ,
    boxShadow: 'lg',
    borderRadius: '1rem',
    p: '1rem',
    mt: '4rem'
  },

  listItem: {
    justifyContent: 'space-between',
    px: "1.2rem !important",
    border:"1px solid" ,
    borderColor: 'gray.300' ,
    borderRadius: '.4rem' ,
    transition: 'all .2s',
    mb: 4,
    p:".5rem",
    _hover: {
      bgColor: 'gray.100',
      transform: 'translateY(-3px)',
      boxShadow: 'md'
    }
  }
})