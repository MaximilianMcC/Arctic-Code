# ----------------------------------------------------------------------------------------------------------

Five explorers have been selected to go on a voyage to the Arctic. Before they can leave, they must pack all of the gear required for their expedition to be deemed a success. The pilot has told everyone that they can bring a maximum of 20kgs each. If this value is exceeded, the plane will be too heavy to take off.

All of the explorers have given the baggage handler a list(your puzzle input). This list contains the weights of each individual item that they have packed. If someones total luggage weight exceeds 20kgs, the baggage handler will start to remove items from the bags. They will begin with taking out the lighter items, then move up the list to heavier items. They will keep removing items until the weight is equal, or below 20kg.

Find out how many items the baggage handler needs to remove for the plane to take off successfully.

# ----------------------------------------------------------------------------------------------------------

Two of the explorers are arguing about if there are more polar bears or penguins lurking around the camp. To solve the debate, one of the explorers sets up a line of sensors around the perimeter. These sensors are buried beneath the snow and are capable of recording the weight and speed of anything that enters their vicinity.

Previous research states that the average weight of a penguin is 23kg, and the average weight of a polar bear is 235kg. Every night at 7:00pm the sensors return their findings for the day(your puzzle input). The explorer has gathered all the data, then took a guess that there were more polar bears compared to penguins.

Using the sensor data, figure out if there are more penguins or polar bears. If there are more polar bears, return true, and if there are more penguins return false.

# ----------------------------------------------------------------------------------------------------------

Two of the explorers have been chosen to get a list of ice cap temperatures over the course of a week. They check the temperature every hour of the day over seven days. The two explorers take it in turns going out to check the temperature. The device they use shows the temperature in both celsius and fahrenheit; the temperature must be recorded in celsius, but some of the temperatures are recorded in fahrenheit by accident. The fahrenheit values need to be found and converted to match the celsius values, but the celsius values must not be converted by accident.

As there are too many values, the explorers need a system to detect and convert the fahrenheit values for them. To convert fahrenheit to celsius, the formula is (a°F − 32) × 5/9 = b°C.

Write a program to go through each value in the explorers' list (your puzzle input) and detect if any of them are fahrenheit, and if so then convert them to celsius.

# ----------------------------------------------------------------------------------------------------------