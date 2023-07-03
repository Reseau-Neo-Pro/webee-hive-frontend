"use client";

export function saveThemeLS(theme: boolean) {
  localStorage.setItem("theme", JSON.stringify(theme));
}
