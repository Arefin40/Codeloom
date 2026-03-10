"use client";

import { cn } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsUpDown, MoreHorizontal } from "lucide-react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export type Course = {
   id: string;
   title: string;
   price: number;
   category: string;
   tags: string[];
   description: string;
   status: "draft" | "pending" | "published";
   enrolledStudents?: number;
};

export const data: Course[] = [
   {
      id: "python",
      title: "Introduction to Python Programming",
      price: 49.99,
      category: "Programming",
      tags: ["python"],
      description:
         "Learn the basics of Python programming, from variables to functions and data structures.",
      status: "published",
      enrolledStudents: 1200
   },
   {
      id: "c2",
      title: "Advanced Web Development with React",
      price: 79.99,
      category: "Web Development",
      tags: ["react"],
      description:
         "Deep dive into React.js and build sophisticated web applications with state management and routing.",
      status: "published",
      enrolledStudents: 850
   },
   {
      id: "c3",
      title: "Data Science with R",
      price: 99.99,
      category: "data-Science",
      tags: ["data-analysis", "statistics", "machine-learning"],
      description:
         "Master data analysis and visualization using R, covering statistical methods and machine learning basics.",
      status: "pending"
   },
   {
      id: "c4",
      title: "Digital Marketing Essentials",
      price: 59.99,
      category: "Marketing",
      tags: ["digital-marketing", "seo"],
      description:
         "Get started with digital marketing, covering SEO, social media marketing, and content strategy.",
      status: "draft"
   },
   {
      id: "c5",
      title: "Introduction to Artificial Intelligence",
      price: 89.99,
      category: "Artificial Intelligence",
      tags: ["ai, ml"],
      description:
         "Explore the fundamentals of AI, including neural networks, machine learning, and ethical considerations.",
      status: "published",
      enrolledStudents: 950
   }
];

export const columns: ColumnDef<Course>[] = [
   // checkbox
   {
      id: "select",
      header: ({ table }) => (
         <Checkbox
            name={`table-header-checkbox`}
            checked={
               table.getIsAllPageRowsSelected() ||
               (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="data-[state=checked]:border-transparent data-[state=checked]:bg-primary/80"
         />
      ),
      cell: ({ row }) => (
         <Checkbox
            name={`row-${String(row.index)}-checkbox`}
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="data-[state=checked]:border-transparent data-[state=checked]:bg-primary/80"
         />
      ),
      enableSorting: false,
      enableHiding: false
   },

   // title
   {
      accessorKey: "title",
      header: "Course Title",
      cell: ({ row }) => (
         <div className="font-semibold">
            <Link href="">{row.original.title}</Link>
         </div>
      )
   },

   // status
   {
      accessorKey: "status",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               className="h-auto p-0 font-semibold text-foreground hover:bg-transparent"
            >
               Status
               <ChevronsUpDown className="ml-2 size-3.5" />
            </Button>
         );
      },
      cell: ({ row }) => {
         const status: string = row.getValue("status");
         return (
            <div className="flex items-center gap-x-2 capitalize">
               <span
                  className={cn("size-2 rounded-full", {
                     "bg-blue-500": status === "draft",
                     "bg-orange-500": status === "pending",
                     "bg-green-500": status === "published"
                  })}
               />
               {status}
            </div>
         );
      }
   },

   // category
   {
      accessorKey: "category",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               className="h-auto p-0 font-semibold text-foreground hover:bg-transparent"
            >
               Category
               <ChevronsUpDown className="ml-2 size-3.5" />
            </Button>
         );
      },
      cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>
   },

   // enrolled students
   {
      accessorKey: "enrolledStudents",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               className="h-auto p-0 font-semibold text-foreground hover:bg-transparent"
            >
               Students
               <ChevronsUpDown className="ml-2 size-3.5" />
            </Button>
         );
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("enrolledStudents") || 0}</div>
   },

   // price
   {
      accessorKey: "price",
      header: ({ column }) => (
         <div className="flex justify-end">
            <Button
               variant="ghost"
               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               className="h-auto p-0 text-right font-semibold text-foreground hover:bg-transparent"
            >
               Price
               <ChevronsUpDown className="ml-2 size-3.5" />
            </Button>
         </div>
      ),
      // <div className="text-right">Price</div>,
      cell: ({ row }) => {
         const amount = parseFloat(row.getValue("price"));

         // Format the amount as a dollar amount
         const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
         }).format(amount);

         return <div className="text-right font-medium">{formatted}</div>;
      }
   },

   // action
   {
      id: "actions",
      enableHiding: false,
      cell: () => {
         return (
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="size-8 p-0 outline-none">
                     <span className="sr-only">Open action menu</span>
                     <MoreHorizontal className="h-4 w-4" />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                     <Link href="">Edit</Link>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         );
      }
   }
];
