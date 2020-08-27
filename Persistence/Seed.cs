using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Past Activity 1",
                        Description = "Activity 2 month ago",
                        Category = "drinks",
                        Date = DateTime.Now.AddMonths(-2),
                        City = "London",
                        Venue = "Pub",
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        Description = "Activity 1 month ago",
                        Category = "culture",
                        Date = DateTime.Now.AddMonths(-1),
                        City = "Paris",
                        Venue = "Louvre",
                    },
                    new Activity
                    {
                        Title = "Past Activity 3",
                        Description = "Activity 1 month ago",
                        Category = "music",
                        Date = DateTime.Now.AddMonths(1),
                        City = "London",
                        Venue = "concert",
                    },
                    new Activity
                    {
                        Title = "Past Activity 4",
                        Description = "Activity 2 month ago",
                        Category = "drinks",
                        Date = DateTime.Now.AddMonths(2),
                        City = "Paris",
                        Venue = "club",
                    }
                };
            
                context.Activities.AddRange(activities);
                context.SaveChanges();
            }
        }
    }
}