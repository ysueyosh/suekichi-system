import { Box, Container, Typography } from "@mui/material";
import { ContactForm } from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <Box pt={8} component="main">
      <Box py={12} sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Box mb={8} textAlign="center">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "var(--font-senobi-gothic)",
                fontWeight: 700,
              }}
            >
              Contact
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              制作のご依頼・ご相談など、お気軽にお問い合わせください。
            </Typography>
          </Box>
          <ContactForm />
        </Container>
      </Box>
    </Box>
  );
}
