import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MainMessageSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Card className="max-w-3xl mx-auto border-none shadow-md">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-primary mb-2">
                מישהו צריך להגיד את זה
              </h1>
              <h2 className="text-3xl font-bold text-primary">
                זה לא קל להיות הורה!
              </h2>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                בין אם זה הקושי התפעולי משינוי אורח החיים, האחריות, המשימות,
                העייפות, הזוגיות שמשתנה,
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ובין אם זה הקושי הרגשי והמנטלי להכיל את הילדים, לבסס סמכות
                הורית, להציב גבולות, להבין כל ילד וילד עם כל מה שהוא מביא איתו
                בהתאם לאופי ולצרכים האישיים שלו.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                יש כל כך הרבה שמונח על הכתפיים שלנו,
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                שבסוף כל יום אנחנו מתפוצצים!
              </h2>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                בין אם זה על הילדים ובין אם זה על בן/ת הזוג שלנו.
              </p>
              <p className="text-2xl font-bold text-primary">ואיך לא?!</p>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-4">
                אבל רגע – זה לא חייב להיות ככה!
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                אפשר ללמוד להפוך את ההורות מחוויה מתישה ומעיקה לחוויה מהנה
                ומעצימה.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                אפשר לקבל כלים שיעזרו לכם להיות ההורים שחלמתם להיות, שיעזרו לכם
                להבין את הילדים, להתחבר אליהם, ולהכניס הביתה רגעים משותפים של
                צחוק והנאה.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
