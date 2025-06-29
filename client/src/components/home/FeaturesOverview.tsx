import { Button } from "@/components/ui/button";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    text: string;
    scrollToId: string;
  };
}

export default function FeaturesOverview() {
  const features: Feature[] = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "Interactive Calculator",
      description: "Calculate your water footprint based on daily activities and get personalized recommendations.",
      action: {
        text: "Try Calculator",
        scrollToId: "calculator"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
}
