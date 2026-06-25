package com.example;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions(){

        assertEquals(5,2+3);

        assertTrue(10>5);

        assertFalse(5>10);

        assertNull(null);

        assertNotNull(new Object());

        assertSame("Hello","Hello");

        assertNotSame(new Object(),new Object());

        int[] a={1,2,3};
        int[] b={1,2,3};

        assertArrayEquals(a,b);
    }
}