import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { articles, categories } from "@/data/articles";
import { useState, useEffect } from "react";

export default function EducationalBlog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [featuredArticle, setFeaturedArticle] = useState(articles[0]);

  useEffect(() => {
    // Filter articles based on category and search query
    let filtered = [...articles];
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(article => article.category === activeCategory);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
