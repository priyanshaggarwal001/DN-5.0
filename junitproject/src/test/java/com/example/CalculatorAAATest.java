package com.example;

import static org.junit.Assert.*;
import org.junit.*;

public class CalculatorAAATest {

    Calculator calculator;

    @Before
    public void setUp(){

        calculator=new Calculator();

        System.out.println("Before Test");
    }

    @After
    public void tearDown(){

        System.out.println("After Test");

        calculator=null;
    }

    @Test
    public void testAddition(){

        // Arrange
        int a=10;
        int b=20;

        // Act
        int result=calculator.add(a,b);

        // Assert
        assertEquals(30,result);
    }

    @Test
    public void testMultiplication(){

        // Arrange
        int a=5;
        int b=6;

        // Act
        int result=calculator.multiply(a,b);

        // Assert
        assertEquals(30,result);
    }
}