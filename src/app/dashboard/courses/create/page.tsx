import { DatePicker } from "@/components/ui/date-picker";
import { Input, Textarea } from "@/components/ui/form";
import { SelectMenu, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardWrapper from "@/components/common/DashboardWrapper";

const page = () => {
   return (
      <DashboardWrapper className="bg-background">
         <div className="grid grid-cols-[1fr,24rem] gap-x-6">
            <main className="space-y-5 rounded-lg bg-background p-4">
               <div className="space-y-1">
                  <h4 className="text-lg font-bold text-foreground">Course Information</h4>
                  <p className="text-sm text-muted-foreground">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quas.
                  </p>
               </div>

               <div className="space-y-6">
                  <Input name="title" label="Course Title" />

                  <Textarea
                     name="shortDescription"
                     label="Short Description"
                     placeholder="Enter a short description"
                  />

                  <div className="flex gap-x-6">
                     <Input type="number" name="price" label="Price" placeholder="Enter price" />
                     <SelectMenu name="category" label="Category" placeholder="Select Category">
                        <SelectItem value="web">Web development</SelectItem>
                        <SelectItem value="app">App development</SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                     </SelectMenu>
                  </div>

                  <div className="flex gap-x-6">
                     <DatePicker name="enrollmentsStarts" label="Enrollments starts on" />
                     <DatePicker name="enrollmentsEnds" label="Enrollments ends on" />
                  </div>

                  <Textarea
                     name="description"
                     label="Description"
                     rows={10}
                     placeholder="Enter your course description..."
                  />
               </div>
            </main>

            <aside>
               <Card className="w-full lg:sticky lg:top-8">
                  <CardHeader>
                     <CardTitle className="text-lg font-bold text-foreground">
                        Course Preview
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li></li>
                     </ul>
                  </CardContent>
               </Card>
            </aside>
         </div>
      </DashboardWrapper>
   );
};
export default page;
