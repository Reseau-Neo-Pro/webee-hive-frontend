"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <Stack
      spacing={4}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        src="/logo-webee-hive.png"
        alt="logo weebee-hive"
        width={80}
        height={80}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingTop: "20px",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>
          <Link href="/">Contact</Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link href="/">Contact</Link>
        </Typography>
      </Box>
    </Stack>
  );
}
