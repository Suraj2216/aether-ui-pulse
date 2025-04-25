
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Error Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="text-9xl font-bold text-slate-200 dark:text-slate-800">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-brand-500" />
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="heading-lg mb-4">Page not found</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Sorry, we couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact support</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
