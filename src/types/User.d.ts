interface User {
   id: string;
   name?: string;
   email?: string;
   image?: string;
   phone?: string;
   role?: "student" | "instructor" | "moderator" | "admin";
}
