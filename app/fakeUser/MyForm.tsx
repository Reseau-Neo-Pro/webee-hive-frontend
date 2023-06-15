import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

interface FormData {
  pseudo: string;
  email: string;
  imageUrl: String;
  password: string;
  status: boolean;
  description: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    pseudo: "",
    email: "",
    imageUrl: "",
    password: "",
    status: false,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Faire quelque chose avec les données du formulaire
    console.log(formData);
  };

  return (
    <Container
      style={{
        width: "500px",
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Création du compte</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "500px",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Pseudo</Typography>
        <TextField
          label="Pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          fullWidth
          style={{ margin: 0 }}
        />
        <Typography variant="h6">Email</Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          style={{ margin: 0 }}
        />
        <Typography variant="h6">Avatar</Typography>
        <TextField
          label="URL de l'image"
          name="imageUrl"
          type="url"
          value={formData.imageUrl}
          onChange={handleChange}
          fullWidth
          style={{ margin: 0 }}
        />
        <Typography variant="h6">Description</Typography>
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          fullWidth
          style={{ marginTop: 0 }}
        />
        <Typography variant="h6">Mot de passe</Typography>
        <TextField
          label="Mot de passe"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          style={{ margin: 0 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.status}
                onChange={handleChange}
                name="status"
              />
            }
            label="Êtes vous disponible?"
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{ marginTop: "2rem", borderRadius: "25px" }}
          >
            Soumettre
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default MyForm;
