"use client";

import { Button, Grid, Stack } from "@mui/material";

interface HomeProps{
  title: string;
  description: string;
  buttonLabel: string;
}

export default function Home({title, description, buttonLabel}: HomeProps) {
  return <div>Home</div>;
}
