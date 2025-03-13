import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Navigation, Compass } from "lucide-react";

export default function JourneySection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto border-none shadow-md overflow-hidden">
          <CardContent className="p-8" dir="rtl">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Compass className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-primary mb-8">
              המסע שלנו
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  בתהליך הליווי אנחנו נצא למסע – בלי להילחץ זה לא מסע כומתה 😉
                </p>
              </div>

              <Separator className="my-2" />

              <div className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <Navigation className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  זה יהיה מסע קליל, שבו נהפוך את ההורות מקושי לחוויה, וזה יתחיל
                  כבר בנינו ומשם אליכם הביתה. נדבר על האתגרים שלכם, נכיר לעומק
                  את התא המשפחתי שלכם, ונמצא גם את החוזקות שלכם.
                </p>
              </div>

              <Separator className="my-2" />

              <div className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  נלמד איך לתקשר בדרך חדשה לגמרי – איך להקשיב באמת, איך להציב
                  גבולות כך שהילד ירצה להקשיב ולשתף פעולה, נזהה ביחד מה הם
                  הנקודות שמפעילות כל אחד מהילדים – וגם אתכם ההורים, ובעיקר –
                  אתן לכם כלים מעשיים שיעזרו לכם ליצור את המשפחה הזאת שאליה אתם
                  שואפים.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
