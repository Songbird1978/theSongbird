import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



function Show({  }) {

    return (
        <motion.div className="">
            <Card key={record.id} className="max-w-100 flex-col-reverse mb-10 bg-stone-100"
                >
                  <CardContent>
                  <p className="font-gothic optionTitle text-left text-md">{record.title}</p> {/* ← Artist info available! */} 
                    <img src={record.imageUrl} alt={record.title} className="w-full h-50"/>
                           
                  </CardContent>
                  <CardHeader>
                  <CardTitle className="font-courier text-left text-sm">{record.artist.name}</CardTitle>
                  </CardHeader>
                </Card>
      </motion.div>
    )
}

export default Show;
