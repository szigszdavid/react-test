import Typography from "@mui/material/Typography";
import { useState } from "react";
import ProductItem from "./components/ProductItem/ProductItem";
import "./HomePage.css";
import { Box } from "@mui/system";

export default function HomePage() {
  const [products, setProducts] = useState([
    {
      name: "Poly Edge 550",
      description: "A high-quality IP phone for business communication.",
      lines: 4,
      display: "Color touchscreen",
      bluetooth: "Yes",
      connection: "Ethernet",
      usb: "Yes",
      poe: "Yes",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/5/CS/JV/OP/135244781/poly-edge-b20-ip-desk-phone-polycom-.jpg",
      price: 30,
    },
    {
      name: "Poly Edge E320",
      description: "An entry-level IP phone designed for small businesses.",
      lines: 2,
      display: "Monochrome display",
      bluetooth: "No",
      connection: "Ethernet",
      usb: "Yes",
      poe: "Yes",
      image:
        "https://www.headsetsdirect.com/wp-content/uploads/2022/08/Poly-Edge-E500-IP-Series-Front.png",
      price: 30,
    },
    {
      name: "Poly Edge B30",
      description: "A budget-friendly IP phone with basic features.",
      lines: 1,
      display: "Monochrome display",
      bluetooth: "No",
      connection: "Ethernet",
      usb: "Yes",
      poe: "No",
      image:
        "https://s13emagst.akamaized.net/products/54931/54930245/images/res_1550b16f681b3e317beaed9a64d5bc60.png?width=300&height=300&hash=A264557AF6C4D759367F10E81D688EAA",
      price: 210,
    },
    {
      name: "Nokia 3210",
      description:
        "A classic mobile phone known for its durability and simplicity.",
      lines: 1,
      display: "Monochrome display",
      bluetooth: "No",
      connection: "2G GSM",
      usb: "No",
      poe: "N/A",
      image:
        "https://www.researchgate.net/publication/311493358/figure/fig11/AS:436872670388234@1481169969628/The-Nokia-3210-20.png",
      price: 2.01,
    },
    {
      name: "Backwire 52xx",
      description: "A series of network switches for various business needs.",
      lines: "N/A",
      display: "N/A",
      bluetooth: "N/A",
      connection: "Ethernet",
      usb: "N/A",
      poe: "Varies by model",
      image:
        "https://www.tonitrus.com/media/image/65/92/29/poly-207576-201-blackwire-c5220-usb-a-to-3-5mm-jack-5200-10237689.jpg",
      price: 29,
    },
    {
      name: "Voyager 43xx",
      description: "A range of wireless routers for home and small office use.",
      lines: "N/A",
      display: "N/A",
      bluetooth: "N/A",
      connection: "Wi-Fi",
      usb: "Varies by model",
      poe: "N/A",
      image:
        "data:image/jpeg;base64,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",
      price: 29,
    },
    {
      name: "Savi 72xx",
      description:
        "A series of wireless headsets for professional communication.",
      lines: "N/A",
      display: "N/A",
      bluetooth: "Yes",
      connection: "Wireless",
      usb: "Yes",
      poe: "N/A",
      image:
        "https://poly.scene7.com/is/image/plantronics/savi_7220_office_print_rgb?$smallprod$&extend=200,-600,0,0&rotate=-10",
      price: 29,
    },
    {
      name: "Voyager Free 60",
      description: "A wireless earbud headset for on-the-go audio and calls.",
      lines: "N/A",
      display: "N/A",
      bluetooth: "Yes",
      connection: "Wireless",
      usb: "Yes",
      poe: "N/A",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08554208.png",
      price: 29,
    },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "3%"
        }}
      >
        <Typography sx={{ color: "#231F41", fontSize: 32, display: "flex", justifyContent: 'center', fontWeight: "bold" }}>Fingertips</Typography>
        <Typography sx={{ color: "#231F41", fontSize: 32, display: "flex", justifyContent: 'center', fontWeight: "bold" }}>Store</Typography>
      </Box>
      <div>
        <div id="productList">
          {products.map((product) => (
            <ProductItem
              className="productItem"
              key={product.name}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
