'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { containerVariants, itemVariants, slideLeftVariants } from '@/lib/animations'
import { useRef } from 'react'

const menuCategories = [
  {
    name: 'Appetizers',
    items: [
      { name: 'Foie Gras Terrine', description: 'House-made with brioche and fig compote. A silky, decadent delicacy that showcases the richness of premium foie gras with a touch of sweetness', price: '$28' },
      { name: 'Oysters Rockefeller', description: 'Three varieties, seasonal preparation with herb butter and parmesan. Fresh from our supplier, shucked to order and finished under the broiler', price: '$32' },
      { name: 'Amuse Bouche', description: 'Chef François&apos;s selection of miniature delights crafted daily. A gastronomic journey in small bites, designed to awaken the palate', price: '$18' },
      { name: 'Langoustine Bisque', description: 'Creamy langoustine soup with saffron foam and crispy croutons. Aromatic and velvety, the essence of langoustine in a single spoonful', price: '$38' },
    ],
  },
  {
    name: 'Entrées',
    items: [
      { name: 'Pan-Seared Wagyu', description: 'Japanese A5 wagyu with truffle reduction and microgreens. Perfectly seared to medium-rare, served with seasonal vegetables and truffle jus', price: '$89' },
      { name: 'Dover Sole Meunière', description: 'Classic French preparation with brown butter, lemon, and seasonal vegetables. A masterpiece of simplicity and elegance', price: '$76' },
      { name: 'Roasted Lamb Loin', description: 'Herb jus, potato fondant, baby root vegetables, and rosemary. Tender and flavorful, balanced with earthy herbs and buttery sauce', price: '$68' },
      { name: 'Lobster Thermidor', description: 'Classic preparation with cognac cream sauce, served in the shell. Rich, decadent, and deeply satisfying', price: '$72' },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Truffle Mac & Cheese', description: 'Creamy blend of aged cheeses including Gruyère and Emmental, infused with fresh black truffle shavings. Pure indulgence', price: '$18' },
      { name: 'Seasonal Vegetables', description: 'Chef&apos;s daily selection of the finest seasonal vegetables, roasted to perfection with herbs and butter', price: '$16' },
      { name: 'Crispy Pommes Anna', description: 'Thinly sliced potatoes layered with clarified butter and herbs, baked until golden and crispy', price: '$14' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Chocolate Soufflé', description: 'With Grand Marnier sauce and Madagascar vanilla ice cream. A light and airy chocolate cloud with a luxurious center', price: '$16' },
      { name: 'Crème Brûlée', description: 'Madagascar vanilla with caramelized sugar. Silky custard with a crackling caramelized top, a timeless classic', price: '$12' },
      { name: 'Seasonal Fruit Tart', description: 'Pastry cream and fresh seasonal fruits. A delicate pastry shell filled with pastry cream and topped with nature&apos;s finest produce', price: '$14' },
      { name: 'Cheese Course', description: 'Selection of aged artisanal cheeses from around the world, served with homemade crackers and fruit preserves', price: '$22' },
    ],
  },
]

export default function MenuItems() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [2500, 3500], [0, -100])

  return (
    <section ref={ref} className="section bg-light overflow-hidden">
      <motion.div style={{ y: contentY }} className="max-w-6xl mx-auto">
        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="mb-16"
          >
            {/* Category Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : 'hidden'}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="heading-md text-primary mb-8 text-center uppercase tracking-widest"
            >
              {category.name}
            </motion.h2>

            {/* Menu Items Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : 'hidden'}
                  transition={{ duration: 0.7, delay: categoryIndex * 0.1 + itemIndex * 0.08 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="border-b border-primary/20 pb-6 hover:border-secondary/50 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : 'hidden'}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + itemIndex * 0.08 + 0.1 }}
                      className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </motion.h3>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : 'hidden'}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + itemIndex * 0.08 + 0.15 }}
                      className="text-secondary font-serif font-bold whitespace-nowrap"
                    >
                      {item.price}
                    </motion.span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : 'hidden'}
                    transition={{ duration: 0.7, delay: categoryIndex * 0.1 + itemIndex * 0.08 + 0.2 }}
                    className="text-foreground/70 font-serif italic text-sm group-hover:text-foreground transition-colors"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider between categories */}
            {categoryIndex < menuCategories.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 1, scaleX: 1 } : 'hidden'}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.3 }}
                className="my-12 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent origin-center"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
