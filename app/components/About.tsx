import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <Card className="overflow-hidden border-none shadow-md">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 lg:w-3/5 p-6 md:p-8" dir="rtl">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                  הי, אני עמית אללוף,
                </h1>
                <p className="text-lg mb-6 text-foreground leading-relaxed">
                  יועצת משפחתית וזוגית ומדריכת הורים שמאמינה שאפשר אחרת.
                </p>

                <Separator className="my-6" />

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    אני אמא של ליאם כיום בן 4, ואופיר בן השנה.
                  </p>

                  <p className="leading-relaxed">
                    אני מגיעה עם רקע עשיר ושנים של לימודים ומחקר בתחום המשפחה –
                    תואר ראשון במשפטים עם התמחות בדיני משפחה, תואר שני במכון
                    אדלר בייעוץ להורות וזוגיות ומדריכת הורים מוסמכת בשיטת
                    &quot;במה מעצימה&quot;.
                  </p>

                  <p className="leading-relaxed">
                    אבל מעבר להשכלה ולידע שצברתי – מה שבאמת חשוב לדעתי זה שאני
                    מגיעה למקצוע שבחר בי הרבה לפני שאני בחרתי בו, המקצוע שהוא
                    הייעוד שלי בעולם. בלי הרבה חפירות, רק כדי שתבינו למה זאת
                    שליחות עבורי, אני הייתי הילדה הזאת, זאת שקשה לכם איתה, זאת
                    שבגללה הולכים להדרכת הורים, הייתי הילד או הילדה שגרמו לכם
                    כרגע להיכנס לכאן ולקרוא את זה.
                  </p>

                  <p className="leading-relaxed">
                    כבר אז כשהייתי ילדה, כל מה שרציתי זה לעזור להורים שלי
                    ולהורים אחרים להבין ילדים כמוני.
                  </p>

                  <p className="leading-relaxed">
                    אני מתמחה בליווי משפחות שנמצאות בדיוק במקום הזה – של תסכול,
                    כעס, ייאוש, ואפילו רחוק מהילד/ה. בתהליך קצר וממוקד אני
                    מעניקה כלים פרקטיים המותאמים אישית לתא המשפחתי שלכם.
                  </p>

                  <p className="leading-relaxed">
                    כלים שעזרו לי באופן אישי ולעוד כל כך הרבה הורים אחרים להיות
                    ההורים שהם באמת רוצים להיות.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-2/5 h-full">
                <div className="relative h-full">
                  <Image
                    src="/about.jpeg?height=600&width=500"
                    width={500}
                    height={600}
                    alt="תמונת פרופיל"
                    className="w-full h-full object-cover md:h-[600px]"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
