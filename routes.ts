import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  const apiRouter = express.Router();
  
  // Contact form submission
  apiRouter.post("/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(contactData);
      
      res.status(201).json({
        message: "Contact message received successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      console.error("Error creating contact message:", error);
      res.status(500).json({
        message: "Failed to process your message. Please try again later."
      });
    }
  });

  // Get all contact messages (could be protected in a real application)
  apiRouter.get("/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      res.status(500).json({
        message: "Failed to retrieve messages. Please try again later."
      });
    }
  });

  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
