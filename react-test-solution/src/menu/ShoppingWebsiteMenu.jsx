import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { alpha, styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { createContext, useState, useMemo } from "react";
import "./ShoppingWebsiteMenu.css";
import ClickAwayListener from '@mui/material/ClickAwayListener';

export const CartContext = createContext([]);

export default function ShoppingWebsiteMenu({ children }) {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const distinctArray = cart
    .filter((element, index, self) => index == self.indexOf(element))
    .map((cartElement) => (
      <tr key={cartElement.name}>
        <td>{cartElement.name}</td>
        <td>
          {cart.filter((element) => element.name === cartElement.name).length}
        </td>
        <td>£ {cartElement.price}</td>
      </tr>
    ))


  const CartTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "black",
      fontSize: theme.typography.pxToRem(12),
      width: "30vw",
      border: "1px solid #ccc",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
    },
  }));

  const CheckoutButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "red",
    fontSize: 8,
    width: '100%',
    marginBottom: '5%'
  }));

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#233239",
          justifyContent: "flex-end",
          height: "6%",
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "white" }}>
            HALLO WORLD
          </Typography>
        </Box>
        <Box sx={{ marginRight: "2%", display: "flex", alignItems: "center" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
          <CartTooltip
            title={
              <Box>
                <Typography sx={{ width: '100%', fontWeight: "bold", fontSize: 18, marginTop: "5%" }}>You have {cart.length} item in your cart!</Typography>
                <Divider sx={{ marginTop: '5%', marginBottom: '5%' }} />
                <table style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ fontSize: 14}}>Item</th>
                      <th style={{ fontSize: 14}}>Units</th>
                      <th style={{ fontSize: 14}}>Price</th>
                    </tr>
                  </thead>
                  <tbody>{distinctArray}</tbody>
                </table>
                <Divider sx={{ marginTop: '5%', marginBottom: '5%' }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>Total Order Value</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>£ {cart.map(cartElement => cartElement.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0) }</Typography>
                </Box>
                <Divider sx={{ marginTop: '5%', marginBottom: '5%' }} />
                <CheckoutButton>Checkout</CheckoutButton>
              </Box>
            }
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
            placement="bottom-start"
          >
            <div className="cart-icon-container">
              <ShoppingCartIcon
                sx={{ width: 30, height: 30, color: "white" }}
                onClick={handleTooltipOpen}
              />
              {cart.length > 0 && (
                <span className="item-count">{cart.length}</span>
              )}
            </div>
          </CartTooltip>
          </div>
          </ClickAwayListener>
          <Typography sx={{ minWidth: 100, color: "white", fontSize: 14 }}>
            Shopping Cart
          </Typography>
        </Box>
      </Box>
      {children}
    </CartContext.Provider>
  );
}
