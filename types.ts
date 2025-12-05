import { LucideIcon } from "lucide-react";

export interface ContentSection {
  title?: string;
  subtitle?: string;
  text: string[];
}

export interface PersonalityTrait {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueItem {
  label: string;
}

export interface NavItem {
  label: string;
  id: string;
}