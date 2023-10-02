import { Button, Typography, IconButton, Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { alpha, styled } from "@mui/material/styles";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../../../menu/ShoppingWebsiteMenu";

export default function ProductItem({ product, addToCart }) {
  
  const { cart, setCart } = useContext(CartContext);

  const ProductTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgba(253,241,215, 0.9)",
      color: "black",
      fontSize: theme.typography.pxToRem(12),
    },
  }));

  const AddToChartButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "red",
    fontSize: 8,
    flex: 1,
  }));

  const ProductTooltipIcon = styled(QuestionMarkIcon)(() => ({
    backgroundColor: "grey",
    color: "white",
    borderRadius: 10,
    fontSize: "1em",
    width: "1em",
    height: "1em",
    ":hover": {
      backgroundColor: "red",
    },
  }));

  return (
    <div
      style={{
        width: "20%",
        height: "20%",
        backgroundColor: "#f5f5f9",
        margin: 5,
        padding: 15,
        borderRadius: 10,
      }}
    >
      <div id="tooltippContainer">
        <img
          className="productItemImage"
          src={product.image}
          alt={product.name}
        />
        <ProductTooltip
          title={
            <Box sx={{ display: "flex" }}>
              <img
                style={{ width: "25%", height: "25%", paddingRight: 10 }}
                src={product.image}
                alt={product.name}
              />
              <Box
                sx={{
                  backgroundColor: "rgba(253,241,215, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
                  <Box>{product.description}</Box>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold' }}>Key Features</Typography>
                  <ul className="keyFeaturesList">
                    <li>
                      <Box>Lines</Box>
                      <Box>{product.lines}</Box>
                    </li>
                    <li>
                      <Box>Display</Box>
                      <Box>{product.display}</Box>
                    </li>
                    <li>
                      <Box>Bluetooth</Box>
                      <Box>{product.bluetooth}</Box>
                    </li>
                    <li>
                      <Box>Connection</Box>
                      <Box>{product.connection}</Box>
                    </li>
                    <li>
                      <Box>USB</Box>
                      <Box>{product.usb}</Box>
                    </li>
                    <li>
                      <Box>PoE</Box>
                      <Box>{product.poe}</Box>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          }
          placement="right-start"
        >
          <ProductTooltipIcon />
        </ProductTooltip>
      </div>
      <div>
        <Typography>{product.name}</Typography>
        <Typography>£ {product.price}</Typography>
      </div>
      <div id="addToChartContainer">
        <AddToChartButton onClick={() => setCart([...cart, product])}>
          Add to Cart
        </AddToChartButton>
      </div>
    </div>
  );
}
